import React from 'react';

type AnimatedHeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
    title: string;
    cls?: string;
};

const AnimatedHeading = ({ title, cls, ...props }: AnimatedHeadingProps) => {
    const words = title.split(" ");
    return (
        <h2 className={`heading ${cls} animated-heading`} {...props}>
            {words.map((word, index) => (
                <span key={index} className="word" style={{ "--index": index } as React.CSSProperties}>
                    {word}&nbsp;
                </span>
            ))}
        </h2>
    );
};

export default AnimatedHeading;
