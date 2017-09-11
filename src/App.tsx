import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from './reducers';
import { fetchBoroughs } from './actions';
import Boroughs from './components/boroughs';
import { Borough } from './components/borough';
import { RtdbService } from './rtdb/rtdb.service';
import { Dispatch } from 'redux';

interface AppProps {
    boroughs?: Borough[];
    dispatch?: Function;
}

class App extends React.Component<AppProps, {}> {

    rtdb: RtdbService;

    constructor(props: AppProps) {
        super(props);
        this.rtdb = new  RtdbService();

    }

    componentDidMount() {
        this.props.dispatch(fetchBoroughs(this.rtdb));
    }

    render() {
     return (
            <div>
                <Boroughs boroughs={this.props.boroughs}/>
            </div>
        );
    }
}

function mapStateToProps(state: RootState): AppProps {

    return {
        boroughs: state.boroughs || []
    };
}

function mapDispatchToProps(dispatch: Dispatch<RootState>) {
    return({
        dispatch: dispatch
    });
}

export default connect<AppProps, AppProps, void>(mapStateToProps, mapDispatchToProps)(App);
