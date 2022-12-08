let myPlaylist = [
    { id: "1", artist: "Juice WRLD", song: "Wishing Well" },
    { id: "2", artist: "Darkstar", song: "Wolf" },
    { id: "3", artist: "Twenty One Pilots", song: "Mullberry street" },
    { id: "4", artist: "Hozier", song: "Wasteland, Baby" },
    { id: "5", artist: "Aurora", song: "Soulless Creatures" },
    { id: "6", artist: "Travis Scott", song: "HUSTONFORNICATION" },
    { id: "7", artist: "Quavo", song: "BIGGEST ALLEY OOP" },
    { id: "8", artist: "SAINt JHN", song: "5 Thousand Singles" },
    { id: "9", artist: "J. Cole", song: "9 5 . s o u t h" },
    { id: "10", artist: "alt-J", song: "Breezeblocks" },
    { id: "11", artist: "Metro Boomin", song: "Borrowed Love" },
    { id: "12", artist: "XXKATUSJINSUX", song: "Forget" },
]
export default function handler(req, res) {
    console.log(req.query);
    let singleSong = myPlaylist.find(() => req.query.id == myPlaylist.id)
    res.send(singleSong)
}