export class MicroFrontend extends React.Component {
  componentDidMount() {
    const {name, host} = this.props;
    const scriptId = `micro-frontend-script-${name}`;
    
    if(document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then(res => res.json)
      .then(manifest => {
        const script = document.createElement('div');
        script.id = scriptId;
        script.src = `${host}${manifest['main.js']}`;
        script.onload = this.renderMicroFrontend;
        document.head.append(script);
      })
  }
  
  componentWillUnmount() {
    const {name} = this.props;

    window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const {name, history} = this.props;
    window[`render${name}`](`${name}-container`, history);
  }

  render() {
    return (
      <main id={`${this.props.name}-container`} />
    )
  }
};