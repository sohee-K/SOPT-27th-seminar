import axios from "axios";

const url =
  "http://ec2-13-124-127-8.ap-northeast-2.compute.amazonaws.com:3000/api/members";

async function getMembers() {
  try {
    const { data } = await axios.get(url);
    console.log("[SUCCESS] GET MEMBERS", data.data);
    return data.data;
  } catch (e) {
    console.error("[FAIL] GET MEMBERS", e);
    return e;
  }
}

async function getMember(id) {
  try {
    const { data } = await axios.get(`${url}/${id}`);
    console.log("[SUCCESS] GET MEMBER", data.data);
    return data.data;
  } catch (e) {
    console.log("[FAIL] GET MEMBER", e);
    throw e;
  }
}

async function updateMember(id, body) {
  try {
    const { data } = await axios.put(`${url}/${id}`, body);
    console.log("[SUCCESS] UPDATE MEMBER", data.data);
    return data.data;
  } catch (e) {
    console.log("[FAIL] UPDATE MEMBER", e);
    throw e;
  }
}

async function createMember(body) {
  try {
    const { data } = await axios.post(`${url}`, body);
    console.log("[SUCCESS] CREATE MEMBER", data.data);
    return data.data;
  } catch (e) {
    console.log("[FAIL] CREATE MEMBER", e);
    throw e;
  }
}

const MemberAPI = {
  getMembers,
  getMember,
  updateMember,
  createMember,
};

export default MemberAPI;
export { getMembers, getMember, updateMember, createMember };
