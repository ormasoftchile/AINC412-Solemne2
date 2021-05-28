<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\alumnos;
use Faker\Factory as Faker;

class AlumnosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
            $faker = Faker::create();
            $miniaturas = array(
                    "miniatura1",
                    "miniatura2",
                    "miniatura3",
                    "miniatura4",
                    "miniatura5",
                    "miniatura6",
                    "miniatura7",
                    "miniatura8",
                    "miniatura9",
                    "miniatura10"
           );
           foreach ($miniaturas as $miniatura)
           {
                   alumnos::create([
                           'nombre' => $faker->text(80),
                           'descripcion' => $content = $faker->paragraph(18),
                           'miniatura' => $miniatura."_MINI.jpg",
                           'anoingreso' => 2020,
			   'fechanacimiento' => $faker->date()
                   ]);
           }
    }
}
