const genSrcImg = (src) => {
    return import.meta.env.VITE_SERVICE + src;
};

export { genSrcImg };
