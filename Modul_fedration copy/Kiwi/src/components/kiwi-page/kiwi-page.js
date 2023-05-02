import Heading from "../heading/heading.js";
import KiwiImage from "../kiwi-image/kiwi-image.js";

class KiwiPage {
  render() {
    const heading = new Heading();
    heading.render();
    const kiwiImage = new KiwiImage();
    kiwiImage.render();
    import("ImageCaptionApp/ImageCaption").then((ImageCaptionModule) => {
      const ImageCaptionPage = ImageCaptionModule.default;
      const imageCaptionPage = new ImageCaptionPage();
      imageCaptionPage.render("this is coming from imageCaption page");
    });
  }
}
export default KiwiPage;