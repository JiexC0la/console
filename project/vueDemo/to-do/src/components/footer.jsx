import '../assets/styles/footer.styl'

export default {
    data() {
        return {
            author: 'JiexC0la'
        }
    },
    render() {
        return (
            <div id="footer">
                <span>&copy;{this.author}</span>
            </div>
        )
    }
}