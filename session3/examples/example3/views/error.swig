{% extends 'layouts/base.swig' %}

{% block title %}
Error page
{% endblock %}


{% block content %}

    <h3>Some error occured.</h3>
    {{err.message}}

{% endblock %}

