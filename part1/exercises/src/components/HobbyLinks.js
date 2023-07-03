export default function HobbyLinks() {

let hobbyLinks = ["https://www.riseart.com/guide/2371/a-guide-to-collage", "https://unsplash.com/s/photos/collage-art"];

return(
<div>
<a href = {hobbyLinks[0]}>A Guide To Collage</a>
<br/>
<a href = {hobbyLinks[1]}>Collage Art Photos</a>
</div>
);
}