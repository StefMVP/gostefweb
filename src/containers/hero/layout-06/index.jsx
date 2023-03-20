import React from "react";
import PropTypes from "prop-types";
import { Typewriter } from "react-simple-typewriter";
// eslint-disable-next-line import/no-named-as-default
import { loadFull } from "tsparticles";
import Button from "@ui/button";
import Image from "@ui/image";
import { ImageType, HeadingType, ButtonType } from "@utils/types";

const HeroArea = ({ data, id }) => {
    return (
        <section
            id={id}
            className="slider-style-6 web-developer height--100 rn-section-gap align-items-center with-particles"
            data-black-overlay="5"
        >
            {data?.images?.[0]?.src && (
                <div className="hero-img w-100 h-100">
                    <Image
                        className="w-100 h-100"
                        src={data.images[0].src}
                        alt={data.images[0]?.alt || "Hero"}
                    />
                </div>
            )}
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="banner-inner text-center">
                            {data?.headings?.[0] && (
                                <h1
                                    className="fs--100"
                                    dangerouslySetInnerHTML={{
                                        __html: data.headings[0].content,
                                    }}
                                />
                            )}
                            {data?.animated_texts && (
                                <span className="header-caption" id="page-top">
                                    <span className="cd-headline clip is-full-width">
                                        <span>I am a </span>{" "}
                                        <Typewriter
                                            words={data.animated_texts}
                                            loop
                                            cursor
                                        />
                                    </span>
                                </span>
                            )}
                            <div className="button-area">
                                {data?.buttons?.map((btn) => (
                                    <Button
                                        key={btn.id}
                                        className={btn.className}
                                        path={btn.path}
                                    >
                                        <span>{btn.content}</span>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

HeroArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        animated_texts: PropTypes.arrayOf(PropTypes.string),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
    }),
};

HeroArea.defaultProps = {
    id: "home",
};

export default HeroArea;
