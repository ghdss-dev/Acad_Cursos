package com.example.sistema_academico.sistema_academico.dto.request;

import lombok.Data;

@Data
public class CursoRequest {

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
}
