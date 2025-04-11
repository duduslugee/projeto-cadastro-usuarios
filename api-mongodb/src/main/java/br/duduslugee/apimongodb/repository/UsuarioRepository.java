package br.duduslugee.apimongodb.repository;

import br.duduslugee.apimongodb.model.Usuario;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsuarioRepository extends MongoRepository<Usuario, String> {
}