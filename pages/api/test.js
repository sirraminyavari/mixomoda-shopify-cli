export default function handler(req, res) {
    res.status(200).json({ message: "you have triggered event 'test'" });
}
