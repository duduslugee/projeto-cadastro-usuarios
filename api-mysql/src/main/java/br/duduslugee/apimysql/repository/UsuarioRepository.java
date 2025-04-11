package br.duduslugee.apimysql.repository;

import br.duduslugee.apimysql.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, String> {
}