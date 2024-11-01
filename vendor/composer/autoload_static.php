<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit16c2896b1664e57a91ce3e9657d6301b
{
    public static $prefixLengthsPsr4 = array (
        'T' => 
        array (
            'TurbochargedTestimonialBlock\\' => 29,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'TurbochargedTestimonialBlock\\' => 
        array (
            0 => __DIR__ . '/../..' . '/includes',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'TurbochargedTestimonialBlock\\LoadTranslations' => __DIR__ . '/../..' . '/includes/LoadTranslations.php',
        'TurbochargedTestimonialBlock\\RegisterBlocks' => __DIR__ . '/../..' . '/includes/RegisterBlocks.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit16c2896b1664e57a91ce3e9657d6301b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit16c2896b1664e57a91ce3e9657d6301b::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit16c2896b1664e57a91ce3e9657d6301b::$classMap;

        }, null, ClassLoader::class);
    }
}