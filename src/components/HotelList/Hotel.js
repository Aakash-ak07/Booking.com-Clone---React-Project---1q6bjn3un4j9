

let x = new Date();


let arr = [

    {
        id: "1",
        Location: "Jodhpur",
        imgsrc: "https://media.radissonhotels.net/image/radisson-blu-hotel-ranchi/guest-room/16256-114065-f63654857_3xl.jpg?impolicy=CustomCrop&cwidth=800&cheight=610",
        availableFrom: `${x.getDate()}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1499"

    },
    {
        id: "2",
        Location: "Jodhpur",
        imgsrc: "https://r1imghtlak.mmtcdn.com/0dc213d219b811ea845e0242ac110002.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,41&output-format=jpg",
        availableFrom: `${x.getDate() + 3}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1999"
    },
    {
        id: "3",
        Location: "Jodhpur",
        imgsrc: "https://media-cdn.tripadvisor.com/media/photo-s/07/bb/cc/2f/radisson-blu-hotel-ranchi.jpg",
        availableFrom: `${x.getDate() + 5}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1699"
    },
    {
        id: "4",
        Location: "Jodhpur",
        imgsrc: "https://media-cdn.tripadvisor.com/media/photo-s/02/22/fe/58/another-view-of-room.jpg",
        availableFrom: `${x.getDate() + 2}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1000"
    },
    {
        id: "5",
        Location: "Jodhpur",
        imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cG589H41oE5cohbIX6kyRVd7iDWAVPaJ90DDKZ3gLZBpN7qu5Hk1DNXYm_5c593n6YU&usqp=CAU",
        availableFrom: `${x.getDate() + 3}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1200"
    },
    {
        id: "1",
        Location: "Jodhpur",
        imgsrc: "https://media-cdn.tripadvisor.com/media/photo-s/17/8b/19/44/trident-nariman-point.jpg",
        availableFrom: `${x.getDate() + 4}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1899",

    },
    {
        id: "2",
        Location: "Mumbai",
        imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHFZk9d88wslDXyo5NqEOS6wK1LOMuF-l2zMXOmBngppiwHUVhaBYHQ-eIw2vxzC5vJpw&usqp=CAU",
        availableFrom: `${x.getDate() + 1}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1599"
    },
    {
        id: "3",
        Location: "Mumbai",
        imgsrc: "https://content.r9cdn.net/rimg/himg/7a/eb/4f/leonardo-1129620-Premier_Room-_City_View_Bedroom_O-298301.jpg?width=500&height=350&xhint=1620&yhint=1000&crop=true",
        availableFrom: `${x.getDate() + 5}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1699"
    },
    {
        id: "4",
        Location: "Mumbai",
        imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPpMTOuyZCVI--20ZeN0ad3EMMbJsw9g4jczQr7EoAfI3qGikGr24I9sWz1O43QtLhfA&usqp=CAU",
        availableFrom: `${x.getDate()}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1000"
    },
    {
        id: "5",
        Location: "Mumbai",
        imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFIR9VfincAR1JM_cmTLu-L9oZUFvBujKXpbcJQKvxNg5oO8C-A4OT29ZqTjNs6tW9o-Y&usqp=CAU",
        availableFrom: `${x.getDate() + 2}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1400"

    },
    {
        id: "1",
        Location: "Banglore",
        imgsrc: "https://media-cdn.tripadvisor.com/media/photo-s/09/12/fa/c0/novotel-hyderabad-convention.jpg",
        availableFrom: `${x.getDate() + 4}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1499"

    },
    {
        id: "2",
        Location: "Banglore",
        imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRmiSFc2-crjQMDTC-sVjMIs6i7baYzFG05OdNsZ6qyKbPBWN1DnT3Jl46M8FZ9sjr4A&usqp=CAU",
        availableFrom: `${x.getDate() + 2}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1199"
    },
    {
        id: "3",
        Location: "Banglore",
        imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqwvcX_KUhMlWnZCA0_hMK9uVhbfegXFhVctHErPa0bpoWbQz4h74_E4ynbVnYFLOlt0E&usqp=CAU",
        availableFrom: `${x.getDate()}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1999"
    },
    {
        id: "4",
        Location: "Banglore",
        imgsrc: "",
        availableFrom: `${x.getDate() + 8}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1400"
    },
    {
        id: "5",
        Location: "Banglore",
        imgsrc: "https://b.zmtcdn.com/data/pictures/1/90951/136b8288dc14a2e8bb1b097e4091acaa_featured_v2.jpg",
        availableFrom: `${x.getDate() + 1}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1800"
    },
    {
        id: "1",
        Location: "Jaipur",
        imgsrc: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/a/r/p3535-162186651160abb80f13cad.jpg?tr=tr:n-xlarge",
        availableFrom: `${x.getDate()}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1199"

    },
    {
        id: "2",
        Location: "Jaipur",
        imgsrc: "https://media-cdn.tripadvisor.com/media/photo-s/05/b0/76/3c/la-cantina.jpg",
        availableFrom: `${x.getDate() + 1}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1399"
    },
    {
        id: "3",
        Location: "Jaipur",
        imgsrc: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/m/a/p3535-162186651760abb815e1e2c.jpg?tr=tr:n-xlarge",
        availableFrom: `${x.getDate()}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1699"
    },
    {
        id: "4",
        Location: "Jaipur",
        imgsrc: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH74023229936244/QS1042/QS1042-Q1/20221027_105929.jpg",
        availableFrom: `${x.getDate() + 5}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1100"
    },
    {
        id: "5",
        Location: "Jaipur",
        imgsrc: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH71121205674374/QS1042/QS1042-Q1/IMG20220418105650.jpg",
        availableFrom: `${x.getDate() + 2}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1700"
    },

    {
        id: "1",
        Location: "Udaipur",
        imgsrc: "https://r1imghtlak.mmtcdn.com/6f58fcf4625b11eba2660242ac110003.jpeg?&output-quality=75&downsize=910:612&crop=910:612;0,149&output-format=jpg",
        availableFrom: `${x.getDate() + 7}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1499"

    },
    {
        id: "2",
        Location: "Udaipur",
        imgsrc: "https://media-cdn.tripadvisor.com/media/photo-s/21/0e/1f/ab/taj-lakefront-bhopal.jpg",
        availableFrom: `${x.getDate() + 4}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1999"
    },
    {
        id: "3",
        Location: "Udaipur",
        imgsrc: "https://sayajihotels.com/images/innerBanner/sayaji-bhopal-overview/banner1.jpg",
        availableFrom: `${x.getDate() + 3}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1699"
    },
    {
        id: "4",
        Location: "Udaipur",
        imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVtCPocmUflALGpbSYa2hKehq3TAQHg-Rl87W4dpQKyjTjwtSki-SsxGIrdbKvKL7saOI&usqp=CAU",
        availableFrom: `${x.getDate() + 1}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1000"

    },
    {
        id: "5",
        Location: "Udaipur",
        imgsrc: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/78929896.jpg?k=220c52377b898cbde5e3001836a19a902f9c8ddb2e5ceb5e9d2eb9a98d44c6cf&o=&hp=1",
        availableFrom: `${x.getDate()}/${x.getMonth() + 1}/${x.getFullYear()}`,
        price: "1300"

    }


]


export default arr;