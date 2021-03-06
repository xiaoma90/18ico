<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitbb7e930f79f5db41ad932991d1199eeb
{
    public static $prefixLengthsPsr4 = array (
        't' => 
        array (
            'think\\composer\\' => 15,
            'think\\' => 6,
        ),
        'Y' => 
        array (
            'YExcel\\' => 7,
        ),
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'think\\composer\\' => 
        array (
            0 => __DIR__ . '/..' . '/topthink/think-installer/src',
        ),
        'think\\' => 
        array (
            0 => __DIR__ . '/../..' . '/thinkphp/library/think',
            1 => __DIR__ . '/..' . '/topthink/think-image/src',
        ),
        'YExcel\\' => 
        array (
            0 => __DIR__ . '/..' . '/purocean/php-excel/src',
        ),
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'P' => 
        array (
            'PHPExcel' => 
            array (
                0 => __DIR__ . '/..' . '/phpoffice/phpexcel/Classes',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitbb7e930f79f5db41ad932991d1199eeb::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitbb7e930f79f5db41ad932991d1199eeb::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInitbb7e930f79f5db41ad932991d1199eeb::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}
