import { memberAPI } from '../../../api/member';
import { MemberEntity } from '../../../model';
import { members } from '../../../api/member/mockData';

export const fetchMembersAction = () => (dispatch) => {
    memberAPI.fetchMembers().then(members => {
        dispatch(fetchMembersCompleted(members))
    })  
}
// action 返回一个type对象，reducer重新计算，reducer = state + members
const fetchMembersCompleted = (members:MemberEntity[]) => ({
    type: 'FETCH_MEMBER_COMPLETED',
    payload: members
})

