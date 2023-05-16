package com.example.sistema_academico.sistema_academico.dto.response;

import com.example.sistema_academico.sistema_academico.model.Dia_Aula;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;

import java.util.List;

@Builder
@Data
public class Dia_Aula_Response {

    private Integer id;
    private LocalDate data_aula;
    private List<String> cursos;

    public static Dia_Aula_Response of(Dia_Aula dia_aula) {

        List<String> nomeCurso = new ArrayList<>();
        dia_aula.getCursos().forEach(nome -> nomeCurso.add(nome.getNomecurso()));

        return Dia_Aula_Response.builder()
                .id(dia_aula.getId())
                .data_aula(dia_aula.getData_aula())
                .cursos(nomeCurso)
                .build();
    }

    public static List<Dia_Aula_Response> of(List<Dia_Aula> dia_aulas) {

        if ( dia_aulas == null ) {
            return null;
        }

        List<Dia_Aula_Response> list = new ArrayList<>(dia_aulas.size());
        for ( Dia_Aula dia_aula : dia_aulas ) {

            list.add( of( dia_aula ) );
        }

        return list;
    }
}
