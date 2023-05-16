package com.example.sistema_academico.sistema_academico.dto.response;

import com.example.sistema_academico.sistema_academico.model.Turma;
import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Builder
@Data
public class TurmaResponse {

    private Integer id;
    private String nome;
    private Double valor;
    private List<String> alunos;
    private List<String> professores;
    private List<String> cursos;

    public static TurmaResponse of(Turma turma){

        List<String> nomeAluno = new ArrayList<>();
        turma.getAlunos().forEach(nome -> nomeAluno.add(nome.getNome())) ;

        List<String> nomeProfessor = new ArrayList<>();
        turma.getProfessores().forEach(nome -> nomeProfessor.add(nome.getNome()));

        List<String> nomeCurso = new ArrayList<>();
        turma.getCursos().forEach(nome -> nomeCurso.add(nome.getNomecurso()));

        return TurmaResponse.builder()
                .id(turma.getId())
                .nome(turma.getNome())
                .valor(turma.getValor())
                .alunos(nomeAluno)
                .professores(nomeProfessor)
                .cursos(nomeCurso)
                .build();
    }

    public static List<TurmaResponse> of(List<Turma> turmas) {
        if ( turmas == null ) {
            return null;
        }

        List<TurmaResponse> list = new ArrayList<>(turmas.size());
        for ( Turma turma : turmas ) {
            list.add( of( turma ) );
        }

        return list;
    }
}
