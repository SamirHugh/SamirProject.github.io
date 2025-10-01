//Author: Paulina Nguyen//
const collageImages = {
    cell1: [
        "https://media.gq.com/photos/67ed88e6e440932ec96b9989/3:4/w_640,c_limit/20.jpg",
        "https://media.gq.com/photos/67acea183bccdc9044fc87eb/3:4/w_640,c_limit/predictions!10.png",
        "https://media.gq.com/photos/67ed77f45b7f414fe3be7281/3:4/w_640,c_limit/dragon-diffusion-Santa-Croce-Big-Tote.jpg",
        "https://media.glamour.com/photos/67e5a1fb18b7e95bf12d8e32/3:4/w_640,c_limit/Ray-Ban%20Mega%20Wayfarer%20Sunglasses%20.png"
      ],
      cell2: [
        "https://img.abercrombie.com/is/image/anf/KIC_118-5361-00104-203_prod1.jpg?policy=product-large",
        "https://media.gq.com/photos/67ed77f540c6adae507b3b82/3:4/w_640,c_limit/uniqlo-c-Broadcloth-Oversized-Shirt.jpg",
        "https://m.media-amazon.com/images/I/71Q00XUXUgL._AC_SY879_.jpg"
      ],
      cell3: [
        "https://coach.scene7.com/is/image/Coach/cr356_p9j_a0?$mobileProductV3$",
        "https://img.hollisterco.com/is/image/anf/KIC_328-5142-00131-300_prod1.jpg?policy=product-large",
        "https://realtakai.com/cdn/shop/files/O1CN01bzkwDe1r3OxmcaOSF__1124265575.jpg?v=1702529514"
      ],
      cell4: [
        "https://i.pinimg.com/736x/d2/d9/5f/d2d95f1844f217172a2cfdd93c50f14d.jpg",
        "https://i.pinimg.com/736x/9c/41/45/9c4145921de2a8b5dc0a432bf5502ba6.jpg", 
        "https://i.pinimg.com/736x/a7/38/4a/a7384a177960486c8ba67ecaa2b7befd.jpg",
        "https://i.pinimg.com/736x/f2/ef/be/f2efbe40fe57ee136e052781da8c38ec.jpg"
      ],
      cell5: [
        "https://i.pinimg.com/736x/29/13/eb/2913ebea78cda5501834b5249e642692.jpg",
        "https://i.pinimg.com/736x/02/bb/b8/02bbb8eb298df338df9ee4662db7b8e8.jpg", 
        "https://i.pinimg.com/736x/b5/61/80/b561809a3150c1952f57730d8774d622.jpg",
        "https://i.pinimg.com/474x/23/92/6a/23926abb0d58f041bfa5c1252326aaf6.jpg"
      ],
      cell6: [
        "https://i.pinimg.com/736x/ba/d8/2b/bad82b2fdf23a9aa03263a8b77e3e8c8.jpg",
        "https://i.pinimg.com/736x/1a/a3/f4/1aa3f45d4ad714718c3abb638b333b3b.jpg",
        "https://i.pinimg.com/474x/68/8c/b3/688cb32af94e837409944ee01447f233.jpg"
      ]
  };
  
  Object.keys(collageImages).forEach(cellId => {
    let index = 0;
    const cell = document.getElementById(cellId);
    const images = collageImages[cellId];
  
    cell.style.backgroundImage = `url('${images[0]}')`;
  
    setInterval(() => {
      index = (index + 1) % images.length;
      cell.style.backgroundImage = `url('${images[index]}')`;
    }, 2000);
  });