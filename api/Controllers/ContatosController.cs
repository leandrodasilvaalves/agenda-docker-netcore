using agenda_docker_netcore.Models;
using Microsoft.AspNetCore.Mvc;

namespace agenda_docker_netcore.Controllers
{
    [Route("api/contatos")]
    [ApiController]
    public class ContatoController : Controller
    {
        private readonly ContatoRepositorio _repositorio;

        public ContatoController(ContatoRepositorio repositorio) => _repositorio = repositorio;

        [HttpGet]
        public IActionResult Get()=> Ok(_repositorio.ListarTodos());

        [HttpGet("{nome}")]
        public IActionResult Get(string nome) => Ok(_repositorio.ObterPorNome(nome));

        [HttpPost]
        public IActionResult Post([FromBody]Contato contato){
            _repositorio.Incluir(contato);
            return Ok("Incluso com sucesso");
        }

        [HttpPut]
        public IActionResult Put([FromBody]Contato contato){
            _repositorio.Atualizar(contato);
            return Ok("Atualizado com sucesso");
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string id){
            _repositorio.Excluir(id);
            return Ok("Excluído com sucesso");
        }
    }
}