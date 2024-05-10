import React from 'react';

const Breadcrumb = ({ image, page, title, className }) => {
    return (
        <section className={`rts-breadcrumb ${className}`} style={{ backgroundImage: `url(${image})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb-content">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">{page}</li>
                            </ul>
                            <h2 className="section-title">{title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Breadcrumb;
