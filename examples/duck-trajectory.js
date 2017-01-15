/* globals THREE */

/*
 * duck trajectory
 *   written by Yosuke Matsusaka (MID Academic Promotions Inc.)
 *   distributed under MIT license
 *
 * duck model is originated from this URL
 *   distributed by Sony Computer Entertainment Inc. under SCEA shared source license
 *   https://github.com/KhronosGroup/glTF-Sample-Models/tree/master/1.0/Duck
 */

define(['THREE_global', 'GLTFLoader', 'OrbitControls'], function() {
    'use strict';

    function duck_trajectory(container) {
        this.container = container;
        this.function = function(duck, v) {
            duck.position.x = v / 100;
        };

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 1, 20000);
        this.camera.position.set(7, 7, 7);
        this.scene.add(this.camera);

        var light = new THREE.DirectionalLight(0xffffff);
        light.position.set(0, 0, 1).normalize();
        this.scene.add(light);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(container.offsetWidth, container.offsetHeight);

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        container.appendChild(this.renderer.domElement);

        var loader = new THREE.GLTFLoader();
        var that = this;
        loader.load('https://cdn.rawgit.com/mrdoob/three.js/r83/examples/models/gltf/duck/glTF-MaterialsCommon/duck.gltf',
            function(data) {
                that.duck = data.scene;
                that.transduck = that.duck.clone();
                that.transduck.traverse(function(child) {
                    if (child instanceof THREE.Mesh) {
                        var transmaterial = child.material.clone();
                        transmaterial.transparent = true;
                        transmaterial.opacity = 0.5;
                        child.material = transmaterial;
                    }
                });
                that.scene.add(that.duck);
                that.scene.add(that.transduck);
                that.render();
            });

        var axis = new THREE.AxisHelper(1000);
        this.scene.add(axis);
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.loop();
    }

    duck_trajectory.prototype.render = function() {
        this.renderer.render(this.scene, this.camera);
    };

    duck_trajectory.prototype.loop = function() {
        var that = this;
        requestAnimationFrame(function() {
            that.loop();
        });
        this.controls.update();
        this.render();
    };
    
    duck_trajectory.prototype.update = function(v) {
        this.function(this.duck, v);
        this.render();
    };

    return duck_trajectory;
});