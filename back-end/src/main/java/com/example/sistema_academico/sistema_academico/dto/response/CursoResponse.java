package com.example.sistema_academico.sistema_academico.dto.response;

import com.example.sistema_academico.sistema_academico.model.Curso;
import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Builder
@Data
public class CursoResponse {

    private Integer id;
    private String nomecurso;
    private Double chaula;
    private Double chtotal;
    private String turno;
    private Double valor;
    private Integer seg;
    private Integer ter;
    private Integer qua;
    private Integer qui;
    private Integer sex;
    private Integer sab;
    private Integer turmaId;
    private Integer cursoId;
    public static CursoResponse of(Curso curso) {

        return CursoResponse.builder()
                .id(curso.getId())
                .nomecurso(curso.getNomecurso())
                .chaula(curso.getChaula())
                .chtotal(curso.getChtotal())
                .turno(curso.getTurno())
                .valor(curso.getValor())
                .seg(curso.getSeg())
                .ter(curso.getTer())
                .qua(curso.getQua())
                .qui(curso.getQui())
                .sex(curso.getSex())
                .sab(curso.getSab())
                .turmaId(Math.toIntExact(curso.getTurma().getId()))
                .cursoId(curso.getDia_aula().getId())
                .build();
    }

    public static List<CursoResponse> of(List<Curso> cursos) {

        if(cursos == null) {

            return null;
        }

        List<CursoResponse> list = new ArrayList<>(cursos.size());

        for (Curso curso : cursos) {

            list.add(of(curso));
        }

        return list;
    }

}
