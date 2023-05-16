package com.example.sistema_academico.sistema_academico.dto.response;

import com.example.sistema_academico.sistema_academico.model.Professor;
import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Builder
@Data
public class ProfessorResponse {

    private Integer id;
    private String nome;
    private String telefone;
    private Double valorhoraaula;
    private Integer turmaId;

    public static ProfessorResponse of(Professor professor) {

        return ProfessorResponse.builder()
                .id(professor.getId())
                .nome(professor.getNome())
                .telefone(professor.getTelefone())
                .valorhoraaula(professor.getValorhoraaula())
                .turmaId(Math.toIntExact(professor.getTurma().getId()))
                .build();
    }

    public static List<ProfessorResponse> of(List<Professor> professores) {

        if(professores == null) {

            return null;
        }

        List<ProfessorResponse> list = new ArrayList<>(professores.size());
        for (Professor professor : professores) {

            list.add(of (professor));
        }

        return list;
    }
}
