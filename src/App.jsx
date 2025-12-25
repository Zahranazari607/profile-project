import './App.css'
import avatarImage from './assets/avatar zahra.png'
import ProfilePage from '.components/ProfilePage/'
function App() {
  const user = {
    name: "Zahra Nazari",
    username: "@nazariz673",
    avatarImage: avatarImage,
    xp: 80,
    lastActive: "Dec 22 2025",
    streakDays: 2,
    longesStreak: 2,
    recentBadgesText: "No Badges Earned",

    personalInfo: {
        Email: 'Nazariz673@gmail.com',
        Gender:'Female',
        Country: 'United Arab Emirates',
        "Province or State": 'Parwan, Afghanistan',
        "Educatonal Degree": 'M.D.',
        "Work Experience": '3 years',
        "Teaching Experience": '2 years',
        "Date of Birth": '05/05/1996',
        "Online Portfolio Link": "Open the link",
        Languages: "Farsi, English, Arabic, French",
        Bio: "Mentor | Researcher | Graphic Designer — KNER Institute",
    },

    accountDetails: {
        Role: "Assistant Editor",
        Status: "Active",
        Verification: "Verified", 
    }
  }

  return (
    <div className="page">
        <ProfilePage user={user}></ProfilePage>
    </div>
  )
}

export default App
