export default {
  async contactCoach(context, data) {
    const newRequest = {
      userEmail: data.email,
      message: data.message,
    };
    const response = await fetch(
      `https://coachapp-754f8-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${data.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(response.message || 'Failed to send request.');
      throw error;
    }
    newRequest.id = responseData.name;
    newRequest.coachId = data.coachId;

    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;

    const response = await fetch(
      `https://coachapp-754f8-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${coachId}.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }
    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }
    context.commit('setMessages', requests);
  },
};
