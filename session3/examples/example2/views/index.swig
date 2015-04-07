{% extends 'layouts/base.swig' %}

{% block title %}
    {{ pagename | title }}
{% endblock %}

{% block head %}
    {% parent %}
    <link rel="stylesheet" href="custom.css">
{% endblock %}

{% block content %}

    <h1>This is just an awesome page.</h1>
    <ul>
        {% for author in authors %}
            <li {% if loop.first %} class="first"{% endif %}>
                {{ author }}
            </li>
        {% endfor %}
    </ul>

    {% include "partials/footer.swig" %}
{% endblock %}

