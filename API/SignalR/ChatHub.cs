using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Application.Comments;
using MediatR;
using Microsoft.AspNetCore.SignalR;

namespace API.SignalR
{
    public class ChatHub : Hub
    {
        private readonly IMediator __mediator;
        public ChatHub(IMediator _mediator)
        {
            __mediator = _mediator;
        }

        public async Task SendComment(Create.Command command)
        {
            var username = Context.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier)?.Value;
            command.Username = username;
            var comment = await __mediator.Send(command);
            await Clients.All.SendAsync("ReceiveComment", comment);
        }
    }
}