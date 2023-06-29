
// took this code from my L2T13 task
function ImageLoader({ imageNumber }) {

    function importAll(r) {
        let images = {};
        r.keys().forEach(item => {
        images[item.replace('./', '')] = r(item);
        });
        return images;
    }
    
    // import all of the images from the 'images' folder
    const images = importAll(require.context('../images', false, /\.GIF$/));
    
    return (
        <img src={images[`state${imageNumber}.GIF`]} alt="Hangman State"></img>
    );
}

export default ImageLoader;
