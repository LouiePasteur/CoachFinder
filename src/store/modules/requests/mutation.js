export default {
  addRequest(state, payload) {
    state.requests.push(payload);
  },
  setMessages(state, payload) {
    state.requests = payload;
  },
};
