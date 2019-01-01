using System.Collections.Generic;
using agenda_docker_netcore.Models;
using Microsoft.AspNetCore.Mvc;

namespace agenda_docker_netcore.Controllers
{
    [Route("v1/contatos")]
    [ApiController]
    public class ContatoController : Controller
    {
        private readonly ContatoRepositorio _repositorio;

        public ContatoController(ContatoRepositorio repositorio) => _repositorio = repositorio;

        [HttpGet]
        public IActionResult Get(){
            var resultado = _repositorio.ListarTodos();
            if(resultado == (ICollection<Contato>)null)  
                return NoContent();

            return Ok(resultado);
        }

        [HttpGet("{id}")]
        public IActionResult Get(string id) {            
            var restulado = _repositorio.ObterPorId(id);
            if(restulado == (Contato)null) 
                return NoContent();
            
            return Ok(restulado);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Contato contato){
            _repositorio.Incluir(contato);
            return Ok(new {data = "Incluso com sucesso"});
        }

        [HttpPut]
        public IActionResult Put([FromBody]Contato contato){
            _repositorio.Atualizar(contato);
            return Ok(new {data = "Atualizado com sucesso"});
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string id){
            _repositorio.Excluir(id);
            return Ok(new {data = "Excluído com sucesso"});
        }
    }
}