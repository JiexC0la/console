import '../assets/styles/footer.styl'

export default {
    data () {
        return {
            author: 'JiexC0la'
        }
    },
    /* eslint-disable */
    render (h) {
        return (
            <div id='footer'>
                <span>&copy;{this.author}</span>
            </div>
        )
    }
    /* eslint-enable */
}
