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
        <section id={id} className="slider-style-5 align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="banner-inner">
                            {data?.headings?.[0] && (
                                <h1>{data.headings[0]?.content}</h1>
                            )}

                            <span className="cd-headline clip is-full-width">
                                {data?.headings?.[1] && (
                                    <span>{data.headings[1]?.content}</span>
                                )}{" "}
                                <span className="animated-text">
                                    <Typewriter
                                        words={data.animated_texts}
                                        loop
                                        cursor
                                        typeSpeed={50}
                                        deleteSpeed={25}
                                    />
                                </span>
                            </span>

                            <div className="button-area">
                                {data?.buttons?.map(({ id, path, content }) => (
                                    <Button key={id} path={path}>
                                        <span>{content}</span>
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
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
    }),
};

HeroArea.defaultProps = {
    id: "home",
};

export default HeroArea;
