const MessageStore = require('./message_store');

class Sent {
  render() {
    let ul = document.createElement('ul');
    const sentMsg = MessageStore.getSentMessages();
    for(let i=0; i<sentMsg.length;i++){
      const result = this.renderMessage(sentMsg[i]);
      ul.appendChild(result);
    }
    return ul;
  }
  
  renderMessage(message) {
    let li = document.createElement('li');
    li.className = 'messages';
    li.innerHTML += `<span class="to">${message.to}</span>`;
    li.innerHTML += `<span class="subject">${message.subject}</span>`;
    li.innerHTML += `<span class="body">${message.body}</span>`;
    return li;
  }
}

module.exports = Sent;