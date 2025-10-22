import React, { useState } from 'react';
import '../styles/ServicesSection.css';
import serviceImage1 from '../assets/service-1-img.webp'; 
import serviceImage2 from '../assets/service-2-img.webp'; 
import serviceImage3 from '../assets/service-3-img.webp'; 
import serviceImage4 from '../assets/service-4-img.webp'; 


const servicesData = [
    {
        id: 1,
        title: "Architecture",
        description: "Beyond surface-level styling, we craft interiors that feel as good as they look.",
        details: [
        "Concept Design",
        "Architectural Planning",
        "3D Visualization & Modeling",
        "Construction Documentation"
        ],
        image: serviceImage1,
    },
    {
        id: 2,
        title: "Interior Design",
        description: "We organize environments around people, movement, and use, creating clarity, comfort, and adaptability.",
        details: [
           "Spatial Identity",
           "Material & Finish Selection",
        "Furniture & Lighting Design",
          "Detail Development"
        ],
        image: serviceImage2,
    },
    {
        id: 3,
        title: "Layout Planning",
        description: "Comprehensive planning from initial concept to final execution.",
        details: [
            "Functional Zoning",
            "Human-Centered Design",
            "Circulation Strategy",
            "Flexibility & Future Use"
        ], 
        image: serviceImage3,
    },
       {
        id: 4,
        title: "Project Management",
        description: "We organize environments around people, movement, and use, creating clarity, comfort, and adaptability.",
        details: [
             "Conceptual Design",
            "Space Planning",
            "Custom Millwork",
            "Project Management"
        ],
        image: serviceImage4,
    },
];


function ServiceItem({ service, isOpen, toggleService }) {
    return (
        <div className="service-accordion-item">
            <div className="service-header" onClick={() => toggleService(service.id)}>
                <div className="service-header-left">
                    <span className="service-number">{service.id.toString().padStart(2, '0')}</span>
                    <h3 className="service-title">{service.title}</h3>
                </div>
                <div className={`toggle-icon ${isOpen ? 'active' : ''}`}>
                    <span className="plus-line vertical"></span>
                    <span className="plus-line horizontal"></span>
                </div>
            </div>

            {/* Collapsible Content */}
            <div className={`service-content ${isOpen ? 'open' : ''}`}>
                <div className="service-content-inner">
                    <p className="service-description">{service.description}</p>
                    
                    <div className="service-details-wrapper">
                        {service.details.length > 0 && (
                            <ul className="service-details-list">
                                {service.details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        )}
                        
                        {service.image && (
                            <img 
                                src={service.image} 
                                alt={service.title} 
                                className="service-image" 
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}


function ServicesSection() {
    // 1. Initialize state with an array of all IDs (1, 2, 3, 4)
    const initialOpenIds = servicesData.map(service => service.id);
    const [openItemIds, setOpenItemIds] = useState(initialOpenIds);

    const toggleService = (id) => {
        setOpenItemIds(prevIds => {
            if (prevIds.includes(id)) {
                // If the ID is in the list, remove it (close the item)
                return prevIds.filter(itemId => itemId !== id);
            } else {
                // If the ID is not in the list, add it (open the item)
                return [...prevIds, id];
            }
        });
    };

    return (
        <section id="services-section" className="section top-padding-0px">
            <div className="w-layout-blockcontainer container w-container">
                <div className="services-blocks-wrapper w-layout-grid 2x1-grid">
                    
                    {/* Left Column: Services Heading */}
                    <h2 className="services-main-title">SERVICES</h2>
                    
                    {/* Right Column: Accordion List */}
                    <div className="services-accordion-list">
                        {servicesData.map((service) => (
                            <ServiceItem
                                key={service.id}
                                service={service}
                                // 2. Check if the current service ID is included in the openItemIds array
                                isOpen={openItemIds.includes(service.id)}
                                toggleService={toggleService}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ServicesSection;