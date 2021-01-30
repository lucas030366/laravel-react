<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVariaveisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('variaveis', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->double("combustivel", 6, 2)->nullable();        
            $table->double("telhado_ceramica", 6, 2)->nullable();
            $table->double("telhado_fibrocimento", 6, 2)->nullable();
            $table->double("telhado_madeira", 6, 2)->nullable();
            $table->double("telhado_policarbonato", 6, 2)->nullable();
            $table->double("piso_ceramica", 6, 2)->nullable();
            $table->double("piso_porcelanato", 6, 2)->nullable();
            $table->double("piso_laminado", 6, 2)->nullable();
            $table->double("piso_policarbonato", 6, 2)->nullable();
            $table->double("tinta", 6, 2)->nullable();
            $table->double("pincel", 6, 2)->nullable();
            $table->double("rolo_pintura", 6, 2)->nullable();
            $table->double("bandeja", 6, 2)->nullable();
            $table->double("fita_crepe", 6, 2)->nullable();
            $table->double("mao_obra_piso", 6, 2)->nullable();
            $table->double("mao_obra_telhado", 6, 2)->nullable();
            $table->double("mao_obra_pintura", 6, 2)->nullable();
            $table->double("mao_obra_grafiato", 6, 2)->nullable();
            $table->double("pregos", 6, 2)->nullable();
            $table->double("madeira_viga", 6, 2)->nullable();
            $table->double("luvas", 6, 2)->nullable();
            $table->double("argamassa", 6, 2)->nullable();
            $table->double("cimento", 6, 2)->nullable();
            $table->double("areia", 6, 2)->nullable();
            $table->double("brita", 6, 2)->nullable();
            $table->double("vergalhao", 6, 2)->nullable();
            $table->double("escoras", 6, 2)->nullable();
            $table->double("rejunte", 6, 2)->nullable();
            $table->double("abracadeira", 6, 2)->nullable();
            $table->double("gesso", 6, 2)->nullable();
            $table->double("lixa", 6, 2)->nullable();
            $table->double("lona", 6, 2)->nullable();
            $table->double("vassoura", 6, 2)->nullable();
            $table->bigInteger("usuario_id")->unsigned();

            $table->foreign("usuario_id")
                ->references("id")
                ->on("usuarios")
                ->onDelete("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('variaveis');
    }
}
