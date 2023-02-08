import { getRandomInt } from "../../utils/random";
import styles from "./Background.module.scss";

const animation = () => {
  const windowInnerWidth = window.innerWidth;
  const windowInnerHeight = window.innerHeight;

  let ellipses = Array.from(
    document.getElementsByClassName(
      styles.ellipse
    ) as HTMLCollectionOf<HTMLDivElement>
  );

  ellipses.forEach((ellipse) => {
    ellipse.style.left = getRandomInt(0, windowInnerWidth) + "px";
    ellipse.style.top = getRandomInt(0, windowInnerHeight) + "px";
    ellipse.style.transform = "translate(-50%, -50%)";

    let finalX = getRandomInt(0, windowInnerWidth);
    let finalY = getRandomInt(0, windowInnerHeight);

    requestAnimationFrame(function animate() {
      const currentX = parseInt(ellipse.style.left);
      const currentY = parseInt(ellipse.style.top);

      const distX = Math.abs(currentX - finalX);
      const distY = Math.abs(currentY - finalY);

      if (distX > 2) {
        ellipse.style.left = currentX + (currentX < finalX ? 5 : -5) + "px";
      } else {
        finalX = getRandomInt(0, windowInnerWidth);
      }

      if (distY > 2) {
        ellipse.style.top = currentY + (currentY < finalY ? 5 : -5) + "px";
      } else {
        finalY = getRandomInt(0, windowInnerHeight);
      }

      requestAnimationFrame(animate);
    });
  });
};

export default animation;
