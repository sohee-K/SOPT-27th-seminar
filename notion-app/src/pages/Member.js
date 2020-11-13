import { Switch, Route } from 'react-router-dom';
import MemberList from './MemberList';
import MemberDetail from './MemberDetail';

function Member({ match }) {
    return(
        <Switch>
            <Route exact path={match.path} component={MemberList} />
            <Route path={`${match.path}/:id`} component={MemberDetail} />
        </Switch>
    );
}

export default Member;