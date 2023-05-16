package com.example.sistema_academico.sistema_academico.dto.response;

import com.example.sistema_academico.sistema_academico.model.Aluno;

import lombok.Builder;
import lombok.Data;


import java.util.ArrayList;
import java.util.List;

@Builder
@Data
public class AlunoResponse {

    private Integer id;
    private String nome;
    private String telefone;
    private String endereco;
    private String cpf;
    private Integer turmaId;

    public static AlunoResponse of(Aluno aluno) {

        return AlunoResponse.builder()

                .id(aluno.getId())
                .nome(aluno.getNome())
                .telefone(aluno.getTelefone())
                .endereco(aluno.getEndereco())
                .cpf(aluno.getCpf())
                .turmaId(Math.toIntExact(aluno.getTurma().getId()))
                .build();
    }

    public static List<AlunoResponse> of(List<Aluno> alunos) {

        if ( alunos == null ) {
            return null;
        }

        List<AlunoResponse> list = new ArrayList<>(alunos.size());
        for ( Aluno aluno : alunos ) {
            list.add( of( aluno ) );
        }

        return list;
    }


}
