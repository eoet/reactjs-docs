function logProps(WrapperComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log("old props: ", prevProps);
      console.log("new props: ", this.props);
    }

    render() {
      return <WrapperComponent {...this.props} />;
    }
  }
}
