import React, { useState } from 'react';
import './App.css';

const App = () => {
  const initialGroceryList = [
    {
      id: 1,
      name: "(Anchor fastener (plated) 4)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRscUCuH-hAo2KUs2y86leZ6KL-4JHICvYh5Q&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
    },
    {
      id: 2,
      name: "(Type Anchor Fastener Nut Bolt for Ceiling , Swing & Multipurpose)",
      image: "https://q1beads.in/cdn/shop/products/41XZrEulVpL.jpg?v=1694877244&width=416",
      measurementsarea: "",
      qty: 0,
      checked: false,
    },
    {
      id: 3,
      name: "(2 Terminal power strip, 15 Amps, 3 Socket 3 Switch)",
      image: "https://5.imimg.com/data5/FO/IY/MY-8063602/powerstrip.png",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 4,
      name: "(Pendant Bulb holder bakelite)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbnUTIfVh8dhQI-iT-BlYvgSRb_IWgKIyVsw&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 5,
      name: "(Pendant switch)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuiwGRt-9HROk0O6z5toPXKCRM1pomQsFu0g&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 6,
      name: "(Pendant Bulb holder brass)",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/5/MR/OC/OQ/612086/pendent-lamp-holder-heavy.JPG",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 7,
      name: "(Tube Starter 20-65W)",
      image: "https://m.media-amazon.com/images/I/21DTbZTtzzL._AC_UF350,350_QL80_.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 8,
      name: "(Batten nail)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWW60A30HN5rA4vXR8ebPO9cwLTbUUyNlGhg&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 9,
      name: "(6 sq mm 3 core Copper armoured cable)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHSPyhxMJaxqVm5PpzaJ1miLr1LGgKeUYvA&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 10,
      name: "( Modular Plate )",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/12/YN/HK/AZ/14104746/oxyrich-modular-plate-with-modular-boxes-9-500x500.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 11,
      name: "(Choke 70W HPSV)",
      image: "https://5.imimg.com/data5/OM/ML/OX/SELLER-96356144/pic-1-500x500.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 12,
      name: "(Choke 150W HPSV )",
      image: "https://5.imimg.com/data5/OM/ML/OX/SELLER-96356144/pic-1-500x500.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 13,
      name: "(DB box 1 way dummy )",
      image: "https://3.imimg.com/data3/WU/RD/MY-12829310/1-way-pole-mcb-metal-box.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 14,
      name: "(Ballast Electronic 36/40 W)",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/10/PV/KK/DG/87212326/36-40-watt-electronic-choke-price.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 15,
      name: "(PVC Conduit Pipe)",
      image: "https://images-cdn.ubuy.co.in/633feb786bb4be427b368545-premium-landscape-pool-spa-pvc-pipe-sch.jpg",   
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 16,
      name: "(PVC bend )",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtxubWOCBNAMzw3_5HntlzPJL8OCd7jQUikQ&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 17,
      name: "(Plier)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElKdiQYY2Pny3cJY65gH_U8qKgoUXd0-Ycw&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 18,
      name: "(Flexible Pipe)",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/5/OC/AF/GQ/86442088/20-mm-pvc-flexible-pipe.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 19,
      name: "(PVC Tape roll)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvzzDbWEQhokJpO2o3UTnGmWYSfflOqZwGwA&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 20,
      name: "(Cutter Plier)",
      image: "https://images.meesho.com/images/products/137560778/tpphq_512.webp",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 21,
      name: "(Batten)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6nCjPJ8m3WIqRTnzdH3hCx2zfG-rvDhV-Nw&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 22,
      name: "(Industrial Socket Box 20 A)",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/7/324819565/QM/ML/EV/184601599/20a-industrial-plug-socket-distribution-box.jpeg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 23,
      name: "(DP MCB)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQFPuH42hwLANHhLaOCX0XQlpyj7VUheoJbg&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 24,
      name: "(DP RCCB)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ84XajIOoIMa0pPy_1ygjcEdx0vlGNhDTVZA&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 25,
      name: "(Wall Plug )",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt04hv_FZuuRHENFCNIzNSvI7WPZYHkPRUPQ&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 26,
      name: "(Cable gitti )",
      image: "https://assets.indiaonline.in/cat-default/450/cable-gitti-6mm-best-quality-electrical-shops-and-dealers.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 27,
      name: "(Add on block (NC)+(NO) )",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1cvuRAmRdF4b_CP8NrMqysgfPF2GJGQM-hQ&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 28,
      name: "(DOL 7.5 Hp Starter)",
      image: "https://envmart.com/img/p/1/0/9/4/8/10948.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 29,
      name: "(Ding Dong Bell )",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTxqege9CpnvocqIlfwwGmKu--7UlsbjtEmw&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 30,
      name: "(3Core, 1.5 sq mm, flexible cable)",
      image: "https://5.imimg.com/data5/SELLER/Default/2020/9/ZS/WG/WS/51101529/polycab-1-5-sqmm-3-core-black-copper-flexible-ins-fr-cable.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 31,
      name: "(CFL 2Pin )",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAQ1zR6hXO2FgAWENkTZz9UN1_HM4yj5-kkA&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 32,
      name: "(Nose Plier)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHdvOfF9GhVxweHTlK6gb0KfdK46FZncsng&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 33,
      name: "(Bulb 40W thread type)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8DjLl8npjop7lybPlo7zP6-K2s1QqnzDU1A&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 34,
      name: "(Bulb 60W Pin type)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoSmndPC9jq1uhXlbJvyh8eqalCa8UW831Zw&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 35,
      name: "(CFL 11w 2 pin )",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBF3XEBbb1vxHuv8kOewzxabUk9F5AENFVQ&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 36,
      name: "(Choke 13w copper)",
      image: "https://images.jdmagicbox.com/quickquotes/images_main/single-core-pvc-insulated-copper-wire-16sq-mm-black-2184227989-bfamsln8.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 37,
      name: "(Screw driver kit )",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2cX3kUckJgp4A2K0uXSg9JRaC0UbdOOIYg&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 38,
      name: "(Distribution Box 24 Way 3 Phase)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHbEiLah-MVoGG7oQS8zz7oC3R_7V4ogw9aA&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 39,
      name: "(Switch MCCB 100A)",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/12/476135132/LO/HM/VG/21258914/schneider-mccb-switch-500x500.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 40,
      name: "(Switch MCCB 200A )",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrB2ToKIQdj8LDhkTVyIYZ9LMWkSBYwOWovA&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 41,
      name: "(DP (Double Pole) MCB Box)",
      image: "https://m.media-amazon.com/images/I/31QHvoyCXML.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 42,
      name: "(PVC Channel 100 * 50 mm White )",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/11/UQ/LJ/OR/163602340/pvc-casings-500x500.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 43,
      name: "(PVC Channel 50 * 50 mm White)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8CNHnRBYBrj41bvW1lOiJ3J9CSrB85KbcQ&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 44,
      name: "(Multiplug 5A)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHyr2sAY_frEzYYI6QQzFoUqWS2oheVkfQpw&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 45,
      name: "(Multiplug 15A)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcyQUaUwrWkEyZUFQjShHXFcm1V0znaCfnSQ&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 46,
      name: "(Single core PVC insulated copper wire 1.5sq mm (green))",
      image: "https://m.media-amazon.com/images/I/71VwCpUCw2L.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 47,
      name: "(Single core PVC insulated copper wire 1.5sq mm (red))",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspgyPsVd7VN_igeHVUjByd_tQC12cCAD1SQ&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 48,
      name: "(Single core PVC insulated copper wire 1.5sq mm (black) )",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVd5BYNXS06DNOZyEu_OjDc-WLn0kOGIv0XQ&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 49,
      name: "(Single core PVC insulated copper wire 2.5sq mm (green) )",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPSn5pYVPY3OVBnJsLYbzekZ-B6Jc1Hc6QrQ&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 50,
      name: "(Single core PVC insulated copper wire 2.5sq mm (red) )",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvCOEdDwkDen0oOHrDTwypwHWholTtPVN5_w&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 51,
      name: "(Single core PVC insulated copper wire 2.5sq mm (black))",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQVhb6ryuZ_Rj_mT3BKImWmRJnKVHkQFNHA&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 52,
      name: "(Single core PVC insulated copper wire 4sq mm (red) )",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVQASqPHw-fL-GLf2CPlKOv7zUQxqu6yqQRw&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 53,
      name: "(Single core PVC insulated copper wire 4sq mm (black))",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/2/GK/YX/BU/41167589/single-core-industrial-cable-500x500.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 54,
      name: "( Single core PVC insulated copper wire 6sq mm (red) )",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD0j7pjJ3EJosD51JLTSFCOeH0tqN0dW8JXA&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 55,
      name: "(Single core PVC insulated copper wire 10sq mm (black))",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/2/GK/YX/BU/41167589/single-core-industrial-cable-500x500.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 56,
      name: "(Single core PVC insulated copper wire 10sq mm (green))",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPSn5pYVPY3OVBnJsLYbzekZ-B6Jc1Hc6QrQ&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 57,
      name: "(Single core PVC insulated copper wire 16sq mm (red))",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiccR4_bNk9lOt5SXqTeT50rLZp3-9LfeKHQ&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 58,
      name: "(Single core PVC insulated copper wire 16sq mm (black))",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh3dvejAp_xscUcVujUq8C-GhiZQG_PA1xKQ&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 59,
      name: "(Ring type Aluminium thimble 10 sq mm )",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/1/PR/VB/IK/3070256/aluminum-ring-type-lug-500x500.jpeg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 60,
      name: "(Ring type Aluminium thimble 16 sq mm )",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVUi8ejopZAOwYgj9dFnDWeiv0lBvTnMLk0A&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 61,
      name: "(Ring type Aluminium thimble 25 sq mm)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_0WGd2q0CprR17Ak6g5pM5pd2QBwoKOEH8w&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 62,
      name: "(Ring type Aluminium thimble 50 sq mm )",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_kkN9Ou25uB0n9GWj_a_ULD9nNGNkCVSsw&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 63,
      name: "(Ring type Aluminium thimble 120 sq mm)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_kkN9Ou25uB0n9GWj_a_ULD9nNGNkCVSsw&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 64,
      name: "(Ring type Aluminium thimble 150-400 sq mm)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_0WGd2q0CprR17Ak6g5pM5pd2QBwoKOEH8w&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 65,
      name: "(Pin type Aluminium thimble 6-10 sq mm)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYl2jcw0Ugsa9WzPMAUhT48f8m9uN7qn_NTg&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 66,
      name: "(TPN Box (to fit only 1 TPN))",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0W_sqHvG0QBXFMDzwB8SiyQbipOlDW3gzvw&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 67,
      name: "(TPN 32A)",
      image: "https://storage.googleapis.com/shy-pub/262162/32ATPNMCB-1725287659996.jpeg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 68,
      name: "( TPN 63A)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-xP9a4e81Y5tcMjBql7oMskXij3grZWZBA&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 69,
      name: "(TP 63A )",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/12/DM/PW/OL/155268478/tp-63-amp-500x500.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 70,
      name: "(MCB 20Amp )",
      image: "https://5.imimg.com/data5/FN/KU/OG/SELLER-42692526/20amp-single-pole-miniature-circuit-breaker.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 71,
      name: "(6 M Modular PVC Box )",
      image: "https://havells.com/media/catalog/product/cache/844a913d283fe95e56e39582c5f2767b/import/Crabtree-Switches/ACTXMIIX06.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 72,
      name: "(3 M Modular PVC Box)",
      image: "https://5.imimg.com/data5/SELLER/Default/2020/10/DN/MU/CL/35270621/663bb4cb-4349-4b9b-b65f-dd1df2b728dc.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 73,
      name: "(1 M Modular metel Box)",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/2/JB/KI/YQ/3695373/gi-modular-box.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 74,
      name: "(3 M Modular metel Box)",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/8/336966090/VA/HD/FD/38970959/3m-gi-modular-concealed-metal-box.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 78,
      name: "(4 M Modular metel Box)",
      image: "https://static.wixstatic.com/media/00604b_91ccf2bf2a9542738d3cd92aabcd5b93~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 79,
      name: "(6 M Modular metel Box)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhfbZtwPgRHPPBDYxOqvDHUMHnV0qLCDVRg&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 80,
      name: "(8 M Modular metel Box)",
      image: "https://5.imimg.com/data5/CM/UE/MY-6464504/8-modular-metal-box.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 81,
      name: "(12 M Modular metel Box)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDfbcGBDF4Zoa4LwxHGytAtuStdQO3zWPpow&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 82,
      name: "(16 M Modular metel Box)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMX7h6jqxnIz2sNvyyKehTfv0SAiOhVyNoA&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 83,
      name: "(18 M Modular metel Box)",
      image: "https://dpmartcloud.s3.ap-south-1.amazonaws.com/images/65a941e8b986c.webp?p=full",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 84,
      name: "(8(v) M Modular metel Box)",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/7/326672765/WQ/NJ/PU/5020502/l-t-cb91208wm00-electrical-and-automation-entice-gi-metal-box-8-module-square-500x500.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 85,
      name: "(3M MODULAR SWITCH PLATE )",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/3/BH/LL/BD/12959528/3-electric-modular-switch-plate-250x250.jpeg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 86,
      name: "(16M MODULAR SWITCH PLATE )",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/9/339914242/DP/YK/RE/132853668/16m-modular-switch-plate-wooden-box.png",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 87,
      name: "(1m Modular switch plate )",
      image: "http://5.imimg.com/data5/SELLER/Default/2024/6/431161998/LZ/LN/HE/5965640/1m-plate-500x500.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 88,
      name: "(4M MODULAR SWITCH PLATE )",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/4/408296210/MM/JR/MY/68156565/f2-250x250.png",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 89,
      name: "(Dummy Modular Blank Plate)",
      image: "https://5.imimg.com/data5/ANDROID/Default/2022/9/LO/CW/GU/9087603/prod-20220913-1507356774633858501883039-jpg-500x500.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 90,
      name: "(12M PLATE ABB MODULAR SWITCH PLATE)",
      image: "https://5.imimg.com/data5/SELLER/Default/2025/2/491894273/TP/OV/LE/3829237/12m-plate-abb-modular-switch-plate-500x500.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 100,
      name: "(Polycarbonate White CLASSICAL Heavy 5X5 Modular Blank Plate Black Line)",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/11/XW/ML/ZL/11479756/classical-heavy-5x5-modular-blank-plate-black-line-500x500.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 101,
      name: "(8 Modules Metallic Copper Brio Silver Line Modular Plate)",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/1/VH/QB/SE/14104746/metallic-copper-brio-silver-line-modular-plate-6-500x500.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 102,
      name: "(6 Modules Metallic plate )",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/10/ZG/WG/VG/74634649/modular-plate-6m-1000x1000.jpeg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 103,
      name: "(8(v) modules plate )",
      image: "https://5.imimg.com/data5/ANDROID/Default/2023/5/306503652/VK/WX/VC/46499572/product-jpeg-500x500.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 104,
      name: "(18 Modules plate)",
      image: "https://5.imimg.com/data5/ANDROID/Default/2022/8/IL/FI/QT/9087603/prod-20220801-145633752660063540336223-jpg-250x250.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 105,
      name: "(16 modules plate)",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/10/RO/QW/TL/74634649/modular-plate-16m-250x250.jpeg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 106,
      name: "(Dummy Switch)",
      image: "https://5.imimg.com/data5/GLADMIN/Default/2023/8/337255704/GT/YZ/CE/90177/dummy-switch-125x125.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id:107,
      name: "(Modular Indicator Switches)",
      image: "https://5.imimg.com/data5/GLADMIN/Default/2022/4/XE/QU/NK/49660/modular-indicator-switches-125x125.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 108,
      name: "(10A White Modular LED Indicator Switch, 1M)",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/4/406401910/ON/IK/ZE/55474800/white-modular-indicator-switch-250x250.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 109,
      name: "(Switch 5A)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTGgP-r8gkchjl4IrN0rIydS1kOE8XOMeevg&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 110,
      name: "(Switch 20A)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTGgP-r8gkchjl4IrN0rIydS1kOE8XOMeevg&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 111,
      name: "(Switch 16A)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg6E9KnR4iUOw5O4SrdqIlWTd-z0bi_3nO8Q&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 112,
      name: "(Switch 25A)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSAYvLWjrrW06_bUS_886rT79uLLUb2Lr90w&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 113,
      name: "(16 Switch mini mccb)",
      image: "data:image/jpeg;base64,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",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 114,
      name: "(20 Switch mini mccb)",
      image: "data:image/jpeg;base64,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",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 115,
      name: "(25 Switch mini mccb)",
      image: "data:image/jpeg;base64,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",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 116,
      name: "(2way  Switch 6A)",
      image: "data:image/jpeg;base64,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",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 117,
      name: "(2way  Switch 20A)",
      image: "data:image/jpeg;base64,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",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 118,
      name: "(2way  Switch 16A)",
      image: "data:image/jpeg;base64,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",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 119,
      name: "(Socket 5A)",
      image: "data:image/jpeg;base64,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",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 120,
      name: "(Socket 16A)",
      image: "data:image/jpeg;base64,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",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 121,
      name: "(Socket 20A)",
      image: "data:image/jpeg;base64,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",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 122,
      name: "(Socket 25A)",
      image: "data:image/jpeg;base64,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",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 123,
      name: "(20 M Modular metel Box)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxaX7A8gOBsmx4RDwSqLTopCekRbrKQv89MQ&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 124,
      name: "(24 M Modular metel Box)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxaX7A8gOBsmx4RDwSqLTopCekRbrKQv89MQ&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 125,
      name: "(Ceiling fan regulator)",
      image: "data:image/jpeg;base64,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",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 126,
      name: "(cable tie 100mm)",
      image: "data:image/jpeg;base64,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",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 127,
      name: "(cable tie 200mm)",
      image: "data:image/jpeg;base64,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",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 128,
      name: "(cable tie)",
      image: "data:image/jpeg;base64,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",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 129,
      name: "(duravolt mini dlux bulb holder for wall)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6tVOql95ot8_EYxf8VM1MJoafxWgyvMTJTw&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 130,
      name: "(White Fancy Angle Bulb Holder)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxmVTgpledYf8xeMyr-vJHygUmiTNBc14EA&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 131,
      name: "(Modular Batten Holder for Wall)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgEAfQP4Ooccd1YojWDetui4_IAxUWR7v01g&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 132,
      name: "(1 way junction box)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbZgjlBRpmHJgBSrzutQm4wYiofzfaz1Igw&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 133,
      name: "(3 way junction box)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHRxuUfroNu0tzVa1HKxfAElrgXkYI7o_D7w&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 134,
      name: "(2 way junction box)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSemCyW-xH7fN3zw_riBq_VIsnT28HN81BI_Q&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 135,
      name: "(4 way junction box)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFtKiOY0T0592pC3538bMjN73GpGpqdKimQ&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 136,
      name: "(PVC Square Junction Box 1way 2 Way 3 Way 4 Way)",
      image: "https://image.made-in-china.com/2f0j00RvpGYHBhsloW/PVC-Square-Junction-Box-1way-2-Way-3-Way-4-Way.webp",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 137,
      name: "(Circular Box 2 Way)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUYW5XgPv_6yZ-DIqjj0Ac81vyzRzabh-WTw&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 138,
      name: "(Pvc Plastic Y Circular Box)",
      image: "https://5.imimg.com/data5/AH/AW/ZK/SELLER-1656362/y-circular-box-500x500.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 139,
      name: "( Four Way Junction Box H)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfRa4bci41BBAOft9U1ktTuvAgLtwuqB7VLg&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 140,
      name: "(pvc conduit reducer)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XkiulllL5d5z_HokGTv7fKWtyDA9T9R02w&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 141,
      name: "(bending spring)",
      image: "https://files.ekmcdn.com/6c8308/images/neish-tools-15mm-internal-pipe-bending-spring-16-p.png",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 142,
      name: "(fan box)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBwlujfahFsniTmhWBVmhhExlMYPH0XhfTtA&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 143,
      name: "(Porcelain Fuse)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPz39IZ_ZAJo3m4hGv9d_XqYkOs54COf7Idg&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 144,
      name: "(common-types-of-screw)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdVm3mYb3J3Fv3mRJlWyXy1jfTVXz49z1LkA&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 145,
      name: "(Orbit Panel Fall Ceiling LED Light)",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/12/368035076/XT/PB/YJ/26422793/8-watt-orbit-panel-fall-ceiling-led-light-220-v-base-type-e27.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 146,
      name: "(PVC Bulb Holder Sheet)",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/9/344388451/YI/ZW/WY/9238521/pvc-bulb-holder-sheet.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 147,
      name: "(Pvc Fan Sheet)",
      image: "https://5.imimg.com/data5/WHATSAPP/Default/2024/6/424431722/IM/HZ/ZM/8944322/pvc-fan-sheet.jpeg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 148,
      name: "( LED Tube Light with Fitting )",
      image: "https://m.media-amazon.com/images/I/71+tdhlXrUL.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 149,
      name: "(wooden board meter)",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/2/CI/MZ/MG/20963857/12-x12-metar-board-spl-18mm-teak-wood.JPG",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 150,
      name: "(Single core PVC insulated copper wire 1.5sq mm (blue))",
      image: "https://cdn.eleczo.com/media/catalog/product/h/a/havells-single-core-cable-blue.webp?auto=webp&format=pjpg&width=449",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 151,
      name: "(Single core PVC insulated copper wire 1.5sq mm (yellow))",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSswvKFXXqutRf-MaxAr77ZvEvoiuHrMno0rQ&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 153,
      name: "(Single core PVC insulated copper wire 1.5sq mm (gray) )",
      image: "https://vashiisl.com/cdn/shop/products/1.5PX1CWHIFR100-2.jpg?v=1736149023",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 154,
      name: "(Single core PVC insulated copper wire 2.5sq mm (blue) )",
      image: "https://cdn.eleczo.com/media/catalog/product/h/a/havells-single-core-cable-blue.webp?auto=webp&format=pjpg&width=449",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 155,
      name: "(Single core PVC insulated copper wire 2.5sq mm (yellow) )",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSswvKFXXqutRf-MaxAr77ZvEvoiuHrMno0rQ&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 156,
      name: "(Single core PVC insulated copper wire 2.5sq mm (gray))",
      image: "https://vashiisl.com/cdn/shop/products/1.5PX1CWHIFR100-2.jpg?v=1736149023",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 157,
      name: "(Single core PVC insulated copper wire 4sq mm (yellow) )",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSswvKFXXqutRf-MaxAr77ZvEvoiuHrMno0rQ&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 158,
      name: "(Single core PVC insulated copper wire 4sq mm (gray))",
      image: "https://vashiisl.com/cdn/shop/products/1.5PX1CWHIFR100-2.jpg?v=1736149023",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 159,
      name: "( Single core PVC insulated copper wire 6sq mm (yellow) )",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSswvKFXXqutRf-MaxAr77ZvEvoiuHrMno0rQ&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 160,
      name: "(Single core PVC insulated copper wire 10sq mm (gray))",
      image: "https://vashiisl.com/cdn/shop/products/1.5PX1CWHIFR100-2.jpg?v=1736149023",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 161,
      name: "(Single core PVC insulated copper wire 10sq mm (blue))",
      image: "https://cdn.eleczo.com/media/catalog/product/h/a/havells-single-core-cable-blue.webp?auto=webp&format=pjpg&width=449",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 162,
      name: "(Single core PVC insulated copper wire 16sq mm (yellow))",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSswvKFXXqutRf-MaxAr77ZvEvoiuHrMno0rQ&s",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
    {
      id: 163,
      name: "(Single core PVC insulated copper wire 16sq mm (gray))",
      image: "https://vashiisl.com/cdn/shop/products/1.5PX1CWHIFR100-2.jpg?v=1736149023",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    }
    ,
    {
      id: 164,
      name: "(meter panel board metal)",
      image: "https://mykit.in/crm/public/uploads/product_images_500x500/tpncubiclemeter.jpg",
      measurementsarea: "",
      qty: 0,
      checked: false,
  
    },
  ];
const [groceries, setGroceries] = useState(initialGroceryList);
  const [searchTerm, setSearchTerm] = useState("");
  const [userName, setUserName] = useState("");
  const [BuyName, setBuyName] = useState("");

  const [filterAreaData, setFilterAreaData] = useState({
    name: "",
    measurementsArea: "",
    qty: "",
    image: "",  
  });

  const handleCheckboxChange = (id) => {
    const updatedGroceries = groceries.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setGroceries(updatedGroceries);
  };

  const handleChange = (id, field, value) => {
    if (field === "qty" && (isNaN(value) || value < 0)) {
      return; 
    }
    const updatedGroceries = groceries.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setGroceries(updatedGroceries);
  };

  const handleFilterAreaDataChange = (e) => {
    const { name, value } = e.target;
    setFilterAreaData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddFilterData = () => {
    if (filterAreaData.name && filterAreaData.measurementsArea && filterAreaData.qty && filterAreaData.image) {
      const newGroceryItem = {
        id: groceries.length + 1,
        name: filterAreaData.name,
        measurementsarea: filterAreaData.measurementsArea,
        qty: filterAreaData.qty,
        checked: false,
        image: filterAreaData.image,
      };
      
      setGroceries((prevGroceries) => [...prevGroceries, newGroceryItem]);

      setFilterAreaData({
        name: "",
        measurementsArea: "",
        qty: "",
        image: "",
      });
    } else {
      alert("Please fill out all fields.");
    }
  };

  const filteredGroceriesForSearch = groceries
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const filteredCheckedGroceries = groceries.filter((item) => item.checked);

  const downloadFilteredData = () => {
    const tableHeader = `
      <style>
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          border-radius: 20px;
        }
        th, td {
          padding: 10px;
          text-align: left;
          border: 1px solid #ddd;
        }
        th {
          background-color: #383838;
          color: white;
        }
        tr:nth-child(even) {
          background-color: #f2f2f2;
        }
        tr:hover {
          background-color: #ddd;
        }
      </style>
      <h2>Electrician name: ${userName}</h2> 
      <h2>BUY name: ${BuyName}</h2> 
      <table>
        <thead>
          <tr>
            <th>Name <br/></th>
            <th>Measurements Area</th>
            <th>Quantity <br/></th>
          </tr>
        </thead>
        <tbody>
    `;
    const tableRows = filteredCheckedGroceries
      .map((item) => {
        return `
        <tr>
          <td>${item.name}</td>
          <td>${item.measurementsarea}</td>
          <td>${item.qty}</td>
        </tr>
      `;
      })
      .join("");

    const tableFooter = `
        </tbody>
      </table>
    `;

    const tableContent = tableHeader + tableRows + tableFooter;

    const blob = new Blob([tableContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'list.html';
    link.click();
  };

  return (
    <div className="container">
      <h1 className="title">Electrical List</h1>

      <div className="search-field">
        <label htmlFor="buyName">Electrician Enter Your Name: </label>
        <input
          type="text"
          id="buyName"
          name="buyName"
          value={BuyName}
          onChange={(e) => setBuyName(e.target.value)}
          placeholder="Enter name..."
          className="search-input"
        />
      </div>
      <div className="search-field">
        <label htmlFor="userName">Buy Enter Your Name: </label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter name..."
          className="search-input"
        />
      </div>

      <div className="search-filter">
        <label htmlFor="search" className="search-label">Search electrical and plumbing </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name..."
          className="search-input"
        />
      </div>

      <table className="grocery-table">
        <thead>
          <tr>
            <th>Image <br/></th>
            <th>Name<br/> </th>
            <th>Measurements area <br/></th>
            <th>Quantity <br/></th>
            <th>Checkbox<br/></th>
          </tr>
        </thead>
        <tbody>
          {filteredGroceriesForSearch.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <img src={item.image} width="50" height="50" alt="product" />
                </td>
                <td>
                  <h6>{item.name}</h6>
                </td>
                <td>
                  <input
                    type="text"
                    name="measurementsarea"
                    value={item.measurementsarea}
                    onChange={(e) => handleChange(item.id, e.target.name, e.target.value)}
                    className="input-field"
                    placeholder="Enter measurements"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="qty"
                    value={item.qty}
                    onChange={(e) => handleChange(item.id, e.target.name, e.target.value)}
                    className="input-field"
                    placeholder="Enter quantity"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="manual-filter">
        <h3>Add Manual Filter Data</h3>
        <input
          type="text"
          name="name"
          value={filterAreaData.name}
          onChange={handleFilterAreaDataChange}
          placeholder="Item Name"
          className="input-field"

        />
        <input
          type="text"
          name="measurementsArea"
          value={filterAreaData.measurementsArea}
          onChange={handleFilterAreaDataChange}
          placeholder="Measurements Area"
          className="input-field"

        />
        <input
          type="number"
          name="qty"
          value={filterAreaData.qty}
          onChange={handleFilterAreaDataChange}
          placeholder="Quantity"
          className="input-field"

        />
        <input
          type="text"
          name="image"
          value={filterAreaData.image}
          onChange={handleFilterAreaDataChange}
          placeholder="Image URL"
          className="input-field"

        />
        <button onClick={handleAddFilterData}>Add Filter Data</button>
      </div>

      <h2 className="filtered-title">Filtered Items </h2>
      {filteredCheckedGroceries.length > 0 ? (
        <table className="filtered-table">
          <thead>
            <tr>
              <th>Image </th>
              <th>Name </th>
              <th>Measurements area</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {filteredCheckedGroceries.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} width="50" height="50" alt="product" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.measurementsarea}</td>
                  <td>{item.qty}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p className="no-items-message">No checked items found. Please check some items to filter.</p>
      )}

      <button className="download-btn" onClick={downloadFilteredData}>
        Download
      </button>
    </div>
  );
};

export default App;
