package com.example.sistema_academico.sistema_academico.dto.response;

import com.example.sistema_academico.sistema_academico.model.Lider;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Builder
@Data
public class LiderResponse {

    private Integer id;
    private String nome;
    private String telefone;
    private LocalDate data_cadastro;
    private String status_2;
    private LocalDate data_novo_contato;
    private String observacao;

    public static LiderResponse of(Lider lider) {

        return LiderResponse.builder()
                .id(lider.getId())
                .nome(lider.getNome())
                .telefone(lider.getTelefone())
                .data_cadastro(lider.getData_cadastro())
                .status_2(lider.getStatus_2())
                .data_novo_contato(lider.getData_novo_contato())
                .observacao(lider.getObservacao())
                .build();
    }

    public static List<LiderResponse> of(List<Lider> lideres) {

        if (lideres == null) {

            return null;
        }

        List<LiderResponse> list = new ArrayList<>(lideres.size());

        for(Lider lider : lideres) {

            list.add(of (lider));
        }

        return list;
    }
}
