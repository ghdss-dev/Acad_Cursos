package com.example.sistema_academico.sistema_academico.model;

import com.example.sistema_academico.sistema_academico.dto.request.TurmaRequest;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Builder // Gerar um Objeto com a classe
@Data  // Fazer Get, Set e To String
@Entity // Para dizer uma Entidade
@AllArgsConstructor // Cria um construtor com todos os argumentos
@NoArgsConstructor // Cria um construtor sem nenhum argumento
@Table(name = "turma") // Definir a Tabela
public class Turma {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "valor", length = 500)
    private Double valor;

    @Column(name = "nome", length = 45)
    private String nome;

    @OneToMany(mappedBy="turma")
    private List<Aluno> alunos;

    @OneToMany(mappedBy="turma")
    private List<Professor> professores;

    @OneToMany(mappedBy = "turma")
    private List<Curso> cursos;

    public Turma (Integer id){
        this.id = id;
    }

    public static Turma of(TurmaRequest request){

        var turma = new Turma();
        BeanUtils.copyProperties(request, turma);

        return turma;
    }
}
