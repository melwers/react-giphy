class Hello extends Component {
    constructor(probs) {
      super(probs);
  
      this.state = {
        clicked: false
      };
    }
  
    render() {
      return (
        <div>
          Hello
          {this.probs.name}
        </div>
      )
    }
  }
  