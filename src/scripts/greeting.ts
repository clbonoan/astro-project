// import actions then call getGreeting in click handler
// name option is sent to the action's handler on the server; if no 
// errors, the result will be available as the data property
import { actions } from 'astro:actions';

const button = document.querySelector('button');
button?.addEventListener('click', async () => {
  // Show alert pop-up with greeting from action
  const { data, error } = await actions.getGreeting({ name: "Christine" });
  if (!error) alert(data);
});