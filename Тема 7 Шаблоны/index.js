import express from "express"
import hbs from "hbs"
import path from "path"

const __dirname = path.resolve()
const app = express()

app.get('/', (req, res) => {
    res.render('index', {mainTitle: 'Kanye West'})
})

const alb = [
    {
        id: 1, name: "Graduation",
        tracks: [
            { no: 1, name: "Good Morning" },
            { no: 2, name: "Champion" },
            { no: 3, name: "Stronger" },
            { no: 4, name: "I Wonder" },
            { no: 5, name: "Good Life" },
            { no: 6, name: "Can't Tell Me Nothing" },
            { no: 7, name: "Barry Bonds" },
            { no: 8, name: "Drunk and Hot Girls" },
            { no: 9, name: "Flashing Lights" },
            { no: 10, name: "Everything I Am" },
            { no: 11, name: "The Glory" },
            { no: 12, name: "Homecoming" },
            { no: 13, name: "Big Brother" },
            { no: 14, name: "Good Night" }
        ]
    },
    {
        id: 2, name: "808s & Heartbreak",
        tracks: [
            { no: 1, name: "Say You Will" },
            { no: 2, name: "Welcome to Heartbreak (featuring Kid Cudi)" },
            { no: 3, name: "Heartless" },
            { no: 4, name: "Amazing (featuring Young Jeezy)" },
            { no: 5, name: "Love Lockdown" },
            { no: 6, name: "Paranoid (featuring Mr Hudson)" },
            { no: 7, name: "RoboCop" },
            { no: 8, name: "Street Lights" },
            { no: 9, name: "Bad News" },
            { no: 10, name: "See You in My Nightmares (featuring Lil Wayne)" },
            { no: 11, name: "Coldest Winter" },
            { no: 12, name: "Pinocchio Story (Freestyle Live from Singapore)" }
        ]
    },
    {
        id: 3, name: "My Beautiful Dark Twisted Fantasy",
        tracks: [
            { no: 1, name: "Dark Fantasy" },
            { no: 2, name: "Gorgeous" },
            { no: 3, name: "Power" },
            { no: 4, name: "All Of The Lights (Interlude)" },
            { no: 5, name: "All Of The Lights" },
            { no: 6, name: "Monster" },
            { no: 7, name: "So Appalled" },
            { no: 8, name: "Devil In A New Dress" },
            { no: 9, name: "Runaway" },
            { no: 10, name: "Hell Of A Life" },
            { no: 11, name: "Blame Game" },
            { no: 12, name: "Lost In The World" },
            { no: 13, name: "Who Will Survive In America" }
        ]
    },
    {
        id: 4, name: "ye",
        tracks: [
            { no: 1, name: "I Thought About Killing You" },
            { no: 2, name: "Yikes" },
            { no: 3, name: "All Mine" },
            { no: 4, name: "Wouldn't Leave" },
            { no: 5, name: "No Mistakes" },
            { no: 6, name: "Ghost Town" },
            { no: 7, name: "Violent Crimes" }
        ]
    },
    {
        id: 5, name: "Donda",
        tracks: [
            { no: 1, name: "Donda Chant" },
            { no: 2, name: "Jail" },
            { no: 3, name: "God Breathed" },
            { no: 4, name: "Off The Grid" },
            { no: 5, name: "Hurricane" },
            { no: 6, name: "Praise God" },
            { no: 7, name: "Jonah" },
            { no: 8, name: "Ok Ok      " },
            { no: 9, name: "Junya" },
            { no: 10, name: "Believe What I Say" },
            { no: 11, name: "24" },
            { no: 12, name: "Remote Control" },
            { no: 13, name: "Moon" },
            { no: 14, name: "Heaven And Hell" },
            { no: 15, name: "Donda" },
            { no: 16, name: "Keep My Spirit Alive" },
            { no: 17, name: "Jesus Lord" },
            { no: 18, name: "New Again" },
            { no: 19, name: "Tell The Vision" },
            { no: 20, name: "Lord I Need You" },
            { no: 21, name: "Pure Souls" },
            { no: 22, name: "Come To Life" },
            { no: 23, name: "No Child Left Behind" },
            { no: 24, name: "Jail Pt 2" },
            { no: 25, name: "Ok Ok Pt 2" },
            { no: 26, name: "Junya Pt 2" },
            { no: 27, name: "Jesus Lord Pt 2" }
        ]
    }
    



]

app.get('/albums', (req, res) => {
    res.render('albums', {mainTitle: 'Albums', alb: alb})
})

const yzy = [
    { id: 1, name: "NIKE AIR YEEZY II, 2014",  },
    { id: 2, name: "ADIDAS YEEZY BOOST 350 V2, 2016", },
    { id: 3, name: "ADIDAS YEEZY BOOST 700 V2, 2018", },
    { id: 4, name: "ADIDAS YEEZY BOOST 700 V3, 2019", },
    { id: 5, name: "ADIDAS YEEZY 500, 2018", }
]

app.get('/yzy', (req, res) => {
    res.render('yzy', {mainTitle: 'YZY', yzy: yzy})
})

app.post('/search', (req, res) => {
    res.send(req.body)
    console.log(req.body)
})

app.listen(3000, () => {
    console.log('express app!!!')
})

app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname, 'views/partials'))
app.use(express.static(__dirname + '/public'))