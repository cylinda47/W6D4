const MessageStore = require('./message_store');

class Inbox {
  render() {
    let ul = document.createElement('ul');
    const inboxMsg = MessageStore.getInboxMessages();
    for(let i=0; i<inboxMsg.length;i++){
      const result = this.renderMessage(inboxMsg[i]);
      ul.appendChild(result);
    }
    return ul;
  }
  
  renderMessage(message) {
    let li = document.createElement('li');
    li.className = 'messages';
    li.innerHTML += `<span class="from">${message.from}</span>`;
    li.innerHTML += `<span class="subject">${message.subject}</span>`;
    li.innerHTML += `<span class="body">${message.body}</span>`;
    return li;
  }
}

module.exports = Inbox;