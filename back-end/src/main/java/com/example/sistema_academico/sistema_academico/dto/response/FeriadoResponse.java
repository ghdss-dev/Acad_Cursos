package com.example.sistema_academico.sistema_academico.dto.response;

import com.example.sistema_academico.sistema_academico.model.Feriado;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Builder
@Data
public class FeriadoResponse {

    private Integer id;
    private LocalDate data_feriado;
    private String descricao;

    public static FeriadoResponse of(Feriado feriado) {

        return FeriadoResponse.builder()
                .id(feriado.getId())
                .data_feriado(feriado.getData_feriado())
                .descricao(feriado.getDescricao())
                .build();
    }

    public static List<FeriadoResponse> of(List<Feriado> feriados) {

        if(feriados == null) {

            return null;
        }

        List<FeriadoResponse> list = new ArrayList<>(feriados.size());

        for(Feriado feriado : feriados) {

            list.add(of (feriado));
        }

        return list;
    }
}
